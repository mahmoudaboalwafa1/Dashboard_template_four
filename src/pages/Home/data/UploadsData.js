import {
  AviImg,
  DillImg,
  EpsImg,
  PdfImg,
  PsdImg,
  ZipImg,
} from "../../../images";

const UploadsData = [
  {
    img: PdfImg,
    alt: "pdf",
    fileName: "my-file.pdf",
    author: "AboAlwafa",
    size: "2.9mb",
  },
  {
    img: AviImg,
    alt: "avi",
    fileName: "My-Video-File.avi",
    author: "Admin",
    size: "4.9mb",
  },
  {
    img: PsdImg,
    alt: "psd",
    fileName: "My-Video-File.avi",
    author: "Mahmoud Elsayed",
    size: "4.5mb",
  },
  {
    img: ZipImg,
    alt: "zip",
    fileName: "My-Zip-File.zip",
    author: "User",
    size: "8.9mb",
  },
  {
    img: DillImg,
    alt: "dill",
    fileName: "My-DLL-File.dll",
    author: "Admin",
    size: "4.9mb",
  },
  {
    img: EpsImg,
    alt: "eps",
    fileName: "My-Eps-File.eps",
    author: "Designer",
    size: "8.9mb",
  },
];

export default UploadsData;
