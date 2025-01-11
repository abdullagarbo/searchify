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

export default data;
