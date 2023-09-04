import { Editor, JSONContent } from "@tiptap/core";

export const getPrevText = (
  editor: Editor,
  {
    chars,
    offset = 0,
  }: {
    chars: number;
    offset?: number;
  },
) => {
  // for now, we're using textBetween for now until we can figure out a way to stream markdown text
  // with proper formatting: https://github.com/steven-tey/novel/discussions/7
  return editor.state.doc.textBetween(
    Math.max(0, editor.state.selection.from - chars),
    editor.state.selection.from - offset,
    "\n",
  );
  // complete(editor.storage.markdown.getMarkdown());
};

export const getTextFromJSON = (content?: JSONContent) => {
  if (!content) return '';
  // recursively get text from content
  let result = '';

  // Base case: If the node has text, append it to the result
  if (content.text) {
    result += content.text;
  }

  // Recursive case: If the node has child content, iterate and call function recursively
  if (content.content) {
    for (const subContent of content.content) {
      result += getTextFromJSON(subContent);
    }
  }

  return result;
}

export const getCharacterCount = (editor: Editor) => {
  return editor?.storage?.characterCount?.characters()
}