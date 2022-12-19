import { useForm } from 'react-hook-form';
import { Input, StyledForm, Btn } from './Searchbar.styled';
import { TbSearch } from 'react-icons/tb';
import { Box } from 'components/Reusable Components/Box';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Searchbar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const { register, handleSubmit, setValue } = useForm();
  const handleSearchSubmit = data => {
    if (data.searchQuery.trim() === '') {
      return;
    }
    onSubmit(data.searchQuery);
  };

  useEffect(() => {
    setValue('searchQuery', searchQuery);
  }, [searchQuery, setValue]);

  return (
    <Box textAlign="center" mt="32px" pl="32px" pr="32px">
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
    </Box>
  );
};

export default Searchbar;
