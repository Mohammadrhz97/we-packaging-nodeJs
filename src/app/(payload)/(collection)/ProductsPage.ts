import { CollectionConfig } from "payload";

export const ProductsPage: CollectionConfig = {
  slug: "ProductServices",
  fields: [
    {
      name: "title",
      label: "عنوان",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "محتوا",
      type: "textarea",
      required: true,
    },
    // {
    //   name: "backgroundImage",
    //   label: "عکس پس زمینه",
    //   type: "upload",
    //   relationTo: "media", // این فرض میکنه که Collection مدیا رو داری
    //   required: true,
    // },
    {
      name: "services",
      label: "خدمات",
      type: "array",
      fields: [
        {
          name: "firstLine",
          type: "text",
          label: "خط اول",
        },
        {
          name: "secondLine",
          type: "text",
          label: "خط دوم",
        },
        {
          name: "thirdLine",
          type: "text",
          label: "خط سوم",
        },
        {
          name: "fourthLine",
          type: "text",
          label: "خط چهارم",
        },
      ],
    },
    {
      name: "description",
      label: "توضیحات",
      type: "group",
      fields: [
        {
          name: "title",
          label: "عنوان توضیحات",
          type: "text",
        },
        {
          name: "firstParagraph",
          label: "پاراگراف اول",
          type: "textarea",
        },
        {
          name: "secondParagraph",
          label: "پاراگراف دوم",
          type: "textarea",
        },
      ],
    },
  ],
};

export default ProductsPage;
