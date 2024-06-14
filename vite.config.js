import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // pour récupérer le fichier index.html qui est placé non pas à la racine mais dans le dossier src
  build: {
    outDir: "../dist", // pour que le dossier build se place à la racine du projet
  },
});
