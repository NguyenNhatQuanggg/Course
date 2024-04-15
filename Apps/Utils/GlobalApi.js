import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-southeast-2.hygraph.com/v2/cluuinso40h5f07uwcw5swyfv/master";

const getCategory = async () => {
  // Tạo câu truy vấn GraphQL bằng cú pháp gql`
  const query = gql`
  query getCategory {
  categories {
    id
    name
    icon {
      url
    }
    slug
  }
}
`
  // Gửi yêu cầu truy vấn GraphQL đến MASTER_URL
    const result = await request(MASTER_URL, query);
    return result;
}
const getCourseList=async()=>{
  // Tạo câu truy vấn GraphQL bằng cú pháp gql``
  const query = gql`query MyQuery {
  courseLists(first: 50, orderBy: createdAt_DESC) {
    author
    description
    demoUrl
    free
    id
    name
    slug
    sourceCode
    tags
    youtobeUrl
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
      }
    }
  }
}
`
  // Gửi yêu cầu truy vấn GraphQL đến MASTER_URL
  const result = await request(MASTER_URL, query);
  return result;
}

// Xuất một đối tượng chứa hai hàm getCategory và getCourseList
export default {
    getCategory,
  getCourseList
}