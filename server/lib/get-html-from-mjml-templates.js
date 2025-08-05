import fs from "fs/promises";
import path from "path";
import ejs from "ejs";
import mjml2html from "mjml";

export const getHtmlFrommjmlTemplate = async (template, data) => {
  const mjmlTemplate = await fs.readFile(
    path.join(import.meta.dirname, "..", "email", `${template}.mjml`),
    "utf-8"
  );

  const filledTemplate = ejs.render(mjmlTemplate, data);

  return mjml2html(filledTemplate).html;
};
