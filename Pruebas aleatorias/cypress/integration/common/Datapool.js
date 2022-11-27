const { faker } = require("@faker-js/faker");

export const dataDict = {
  "a correct email": "test5@example.com",
  "a correct password": "password123",
  "an incorrect email": "test@",
  numbers: "6391012648201",
  "a short password": "abc",
  "a long password":
    "qwertyuiopasdfghjklñzxcvbnmqqqqqqqqqqqqqqwqweqwetyuiophjklfdsazzmxnxnxbcbcbfqqtwtwseijdjdjdjdkslzieeqpaaatetetwwqqqwweerrrtttyyuuu",
  "an empty text": " ",
  "an email with whitespace at the end": "test_email@example.com ",
  "an email with whitespace": "test email@example.com",
  "154 characters":
    "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
  "more than 191 characters":
    "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777",
  whitespaces: "   ",
  "tag with whitespaces": "tag   with    whitespaces",
  "correct tag title": "tag",
  "correct description": "my tag description",
  "more than 500 characters":
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
  "one letter": "a",
  "invalid hex": "xyzxyz",
  "valid slug": "slug",
  "special characters":
    "$$$$######^^^^^^^&&&&&&********((((((((())))))))))))////////..........,,,,,,,,/*********-----+++++++++~~~~~~~~~~~~~~~~~~~%%%%%%%%%%%%%",
  "329 characters":
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
  "valid url": "https://twitter.com/bbcmundo",
  "valid site title": "Valid site title",
  "more than 500 characters":
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section",
  "one letter": "a",
  "invalid hex": "xyzxyz",
  "twitter title": "This is a recommended title lenght",
  "facebook title": "The recommended title should have 100 characters",
};

export const randDict = {
  "a correct email": faker.internet.email,
  "a correct password": faker.internet.password,
  "an incorrect email": faker.datatype.string,
  "a name": faker.name.firstName,
  "a number": faker.datatype.number,
};

export const pseudoRandDict = {
  "a correct email": faker.internet.email(),
  "a correct password": faker.internet.password(),
  "a very long password": faker.internet.password(100),
  "a password with whitespace": faker.internet.password(
    null,
    null,
    null,
    "                    "
  ),
  "an incorrect email": faker.name.firstName(),
  "a very long string": faker.internet.password(500),
  "a very long any string": faker.datatype.string(500),
  "a very long email address": faker.internet.password(500) + "@example.com",
  "an email starting with blankspace": " " + faker.internet.email(),
  "a blankspace string": " ",
  "a very short string": faker.datatype.string(1),
  "a number": faker.datatype.number(),
  "a string": faker.internet.password(),
  "a string with whitespace": " " + faker.internet.password(),
};