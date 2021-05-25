import mock from "../utils/mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "Alexsandro Ricardo",
//   email: "alexsandro@gmail.com",
// });

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "alexsandro@gmail.com" || password !== "123456") {
    return [400, { message: "Seu e-mail ou senha estão incorretos." }];
  }

  const user = {
    id: 1,
    name: "Alexsandro Ricardo",
    username: "alexx",
    email: "alexsandro@gmail.com",
    avatar: "/images/avatars/avatar_1.jpeg",
  };

  return [200, { user }];
});
