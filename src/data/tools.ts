export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  keywords: string;
  image: string;
  version: string;
  platform: string;
  downloadUrl: string;
  sha256: string;
}

export const tools: Tool[] = [
  {
    slug: "wincipher",
    name: "WinCipher",
    description: "Simple AES encryption tool for Windows.",
    longDescription:
      'WinCipher is a lightweight utility that adds secure file encryption directly to your Windows context menu. Simply right-click any file and select "Encrypt/Decrypt" to protect your sensitive files with AES encryption. The tool prompts for a password, then encrypts or decrypts your file. For added security, it includes SDelete integration to securely wipe original files after encryption, preventing recovery. Installation is simple: just run the included install.bat file to add the context menu option, and uninstall just as easily when needed.',
    keywords: "file, encryption, decryption, AES, windows, tool, utility",
    image: "/images/wincipher.png",
    version: "1.0.0.0",
    platform: "Windows",
    downloadUrl: "/files/wincipher-v1.0-portable.zip",
    sha256: "7ec8fb66020badd2d8b3c7f53a70e98e878a8f714e1ff888584155b1df824bd2",
  },
  {
    slug: "easy-watermark",
    name: "EasyWatermark",
    description: "Watermark your images with custom text.",
    longDescription:
      "EasyWatermark adds text watermarks to your photos with a few clicks. Perfect for privacy snobs who don't trust online tools. Just select your image, enter your watermark text, and save the new image.",
    keywords: "image, watermark, text, stamp, tool, utility, windows",
    image: "/images/easy-watermark.png",
    version: "1.0.0.0",
    platform: "Windows",
    downloadUrl: "/files/easywatermark-v1.0-portable.zip",
    sha256: "5a33c15e00b4b997b1a0b39ee2121807901e83d4ad2b40f549509692cb55330c",
  },
];
