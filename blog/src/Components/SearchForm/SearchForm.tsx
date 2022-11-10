import Box from '@mui/material/Box';
import { Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { FormField } from '../FormField/FormField';
import React from 'react';
import style from './searchForm.module.css';
import { ClearOutlined, SearchOutlined } from '@mui/icons-material';

type SearchFormType = {
  setSearchValue: (search: string) => void;
  clearPosts: () => void;
  searchValue: string;
};

export const SearchForm: React.FC<SearchFormType> = ({ setSearchValue, clearPosts, searchValue }) => {
  const onSubmitHandler = (value: string, setSubmitting: (status: boolean) => void) => {
    clearPosts();
    setSearchValue(value);
    setSubmitting(false);
  };
  const clearHandler = () => {
    clearPosts();
    setSearchValue('');
  };
  return (
    <Box>
      <Formik
        enableReinitialize
        initialValues={{ search: searchValue }}
        onSubmit={async (values, { setSubmitting }) => onSubmitHandler(values.search, setSubmitting)}
      >
        {({ isSubmitting, values, errors, touched, setFieldValue, setFieldTouched }) => {
          const setValue = (name: string, value: string) => {
            setFieldTouched(name, true);
            setFieldValue(name, value);
          };

          return (
            <Form className={style.form}>
              <FormField
                onFocus={(event: { currentTarget: HTMLInputElement }) => event.currentTarget.select()}
                name={'search'}
                touched={touched.search}
                label={'Enter Title'}
                error={errors.search}
                value={values.search}
                setValue={setValue}
              />

              <Box sx={{ ml: '20px' }}>
                {searchValue && (
                  <Button variant="contained" sx={{ mr: 1 }} onClick={clearHandler}>
                    <ClearOutlined />
                  </Button>
                )}
                <Button type="submit" variant="contained" disabled={isSubmitting || !values.search}>
                  <SearchOutlined />
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
