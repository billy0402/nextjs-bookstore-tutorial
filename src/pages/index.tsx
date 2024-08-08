import type { NextPage } from 'next';

import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { fakeBooks } from '@/fixtures/book';

const HomePage: NextPage = () => {
  return (
    <Box m={10}>
      <Heading as='h1' size='xl' mb={20}>
        書籍列表
      </Heading>
      <TableContainer>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>標題</Th>
              <Th>類型</Th>
              <Th>價格</Th>
              <Th>出版日期</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fakeBooks.map((book) => (
              <Tr key={book.id}>
                <Td>{book.title}</Td>
                <Td>{book.type.name}</Td>
                <Td>{book.price}</Td>
                <Td>{book.publishDate.toLocaleDateString('zh-TW')}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HomePage;
