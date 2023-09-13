const DEFAULT_EDITOR_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Introducing Draft" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Draft is a WYSIWYG editor with AI-powered autocompletion adapted from ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://novel.sh/",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Novel",
        },
        { type: "text", text: ". Built with " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://tiptap.dev/",
                target: "_blank",
                class:
                  "text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer",
              },
            },
          ],
          text: "Tiptap",
        },
        { type: "text", text: "." },
      ],
    },
  ],
};

export default DEFAULT_EDITOR_CONTENT;
