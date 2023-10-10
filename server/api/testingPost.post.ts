export default defineEventHandler(async (event) => {
 const body = await readBody(event);
 return {
  firstName: body.firstName,
  lastName: body.lastName,
 };
});
