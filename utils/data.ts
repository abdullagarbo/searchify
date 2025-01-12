import { faker } from '@faker-js/faker';

const getImage = () => faker.image.url();
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = () => faker.book.title();

const data = [...new Array(50)].map((item, index) => {
  return {
    type: getType(),
    id: index + 1,
    url: getUrl(),
    title: getTitle(),
    description: getText(),
    image: getImage(),
  };
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const searchData = async (keyword: string) => {
  await delay(3000);
  if (!keyword) return data;
  return data.filter(
    (item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase())
  );
};

export default data;
