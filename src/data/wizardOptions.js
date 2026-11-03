import { FaJava, FaNodeJs, FaPython, FaWindows, FaLinux, FaApple } from "react-icons/fa";

export const LANGUAGES = [
  { value: "java", label: "Java", Icon: FaJava },
  { value: "nodejs", label: "Node.js", Icon: FaNodeJs },
  { value: "python", label: "Python", Icon: FaPython },
  { value: "dotnet", label: ".NET" },
];

export const VERSIONS_BY_LANGUAGE = {
  java: ["8", "11", "17", "21"],
  nodejs: ["16", "18", "20", "22"],
  python: ["3.9", "3.10", "3.11", "3.12"],
  dotnet: ["6", "7", "8"],
};

export const OPERATING_SYSTEMS = [
  { value: "Windows", label: "Windows", Icon: FaWindows },
  { value: "Linux", label: "Linux", Icon: FaLinux },
  { value: "macOS", label: "macOS", Icon: FaApple },
];

export const WIZARD_STEPS = ["Linguagem", "Versão", "Sistema", "Finalizar"];
