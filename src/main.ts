import { port, server } from "./bootstrap/server";

const bootstrap = async function () {
  try {
    server.listen(port, () => {
      console.info(`Server listening on ${port}`);
    });
  } catch (error: any) {
    console.error(error);
    process.exit(1);
  }
};

bootstrap();
