import { useState } from 'react';

import type { NextPage } from 'next';

import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Link from 'next/link';

import { fakeBooks } from '@/fixtures/book';

const HomePage: NextPage = () => {
  const [books, setBooks] = useState(fakeBooks);

  return (
    <Box m={10}>
      <Flex as='header' justifyContent='space-between'>
        <Heading as='h1' size='xl' mb={20}>
          書籍列表
        </Heading>
        <Link href='/create'>
          <Button colorScheme='green'>新增書籍</Button>
        </Link>
      </Flex>
      <TableContainer>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>標題</Th>
              <Th>類型</Th>
              <Th>價格</Th>
              <Th>出版日期</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            {books.map((book) => (
              <Tr key={book.id}>
                <Td>{book.title}</Td>
                <Td>{book.type.name}</Td>
                <Td>{book.price}</Td>
                <Td>{book.publishDate.toLocaleDateString('zh-TW')}</Td>
                <Td>
                  <Link href={`/${book.id}`}>
                    <Button colorScheme='blue'>編輯</Button>
                  </Link>
                  <Button
                    colorScheme='red'
                    ml={3}
                    onClick={() =>
                      setBooks(books.filter((_book) => _book.id !== book.id))
                    }
                  >
                    刪除
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HomePage;
