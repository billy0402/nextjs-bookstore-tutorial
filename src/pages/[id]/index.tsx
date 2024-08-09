import type { NextPage } from 'next';

import { useRouter } from 'next/router';

import { Box, Button, Heading, Link, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import Field, { FieldConfig } from '@/components/Field';
import { fakeBooks } from '@/fixtures/book';
import { fakeTypes } from '@/fixtures/type';
import type { EditBook } from '@/models/book';

const fieldConfigs: FieldConfig[] = [
  {
    name: 'title',
    type: 'text',
    label: '標題',
    required: true,
  },
  {
    name: 'typeId',
    type: 'select',
    label: '類型',
    required: true,
    options: fakeTypes.map((type) => ({ value: type.id, label: type.name })),
  },
  {
    name: 'introduction',
    type: 'textarea',
    label: '簡介',
    required: true,
  },
  {
    name: 'price',
    type: 'number',
    label: '價格',
    required: true,
  },
  {
    name: 'publishDate',
    type: 'date',
    label: '出版日期',
    required: true,
  },
];

const BookEditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const book = fakeBooks.find((book) => book.id === Number(id));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditBook>({
    values: {
      ...book,
      typeId: book?.type.id,
      publishDate: book?.publishDate.toISOString().slice(0, 10) as any,
    } as EditBook,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box m={10}>
      <Link href='/'>
        <Button mb={10}>返回</Button>
      </Link>

      <Heading as='h1' size='lg' mb={7}>
        書籍表單
      </Heading>
      <VStack
        as='form'
        alignItems='flex-start'
        gap={5}
        onSubmit={handleSubmit(onSubmit)}
      >
        {fieldConfigs.map((config) => (
          <Field
            key={config.name}
            config={config}
            register={register}
            errors={errors}
          />
        ))}
        <Button type='submit' colorScheme='blue' mt={5}>
          儲存
        </Button>
      </VStack>
    </Box>
  );
};

export default BookEditPage;
