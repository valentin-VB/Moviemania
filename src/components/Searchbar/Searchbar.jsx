import { useForm } from 'react-hook-form';
import { Input, StyledForm, Btn } from './Searchbar.styled';
import { TbSearch } from 'react-icons/tb';

const Searchbar = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleSearchSubmit = data => {
    if (data.searchQuery.trim() === '') {
      return;
    }

    onSubmit(data.searchQuery);
    reset();
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(data => {
        handleSearchSubmit(data);
      })}
    >
      <Input
        {...register('searchQuery')}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search for movies"
      ></Input>
      <Btn>
        <TbSearch></TbSearch>
      </Btn>
    </StyledForm>
  );
};

export default Searchbar;
