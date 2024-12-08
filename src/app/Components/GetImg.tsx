import getBasePath from "@/app/Definition/BasePath";

const GetImg = (src: string): string => {
  return `${getBasePath()}/${src}`; 
}

export default GetImg;