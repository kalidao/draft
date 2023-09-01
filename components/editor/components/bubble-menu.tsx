import { BubbleMenu, BubbleMenuProps } from "@tiptap/react";
import { FC, useState } from "react";
import { FontBoldIcon, FontItalicIcon, MagicWandIcon, CodeIcon, StrikethroughIcon, UnderlineIcon } from '@radix-ui/react-icons'
import { NodeSelector } from "./node-selector";
import { ColorSelector } from "./color-selector";
import { LinkSelector } from "./link-selector";
import { cn } from "@/lib/utils";
import { InstructionPrompter } from "./instruction-prompter";

export interface BubbleMenuItem {
  name: string;
  isActive: () => boolean;
  command: () => void;
  icon: typeof FontBoldIcon;
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children">;

export const EditorBubbleMenu: FC<EditorBubbleMenuProps> = (props) => {
  const items: BubbleMenuItem[] = [
    // {
    //   name: 'AI Edit',
    //   isActive: () => false,
    //   command: () => {
    //     // get the current selection
    //     if (!props.editor) return;
    //     const { from, to, content } = props.editor.state.selection;
    //     console.log('current selection', from, to);

    //     const text = content().content;

    //     // send the text to the AI
        

    //   },
    //   icon: MagicWandIcon,
    // },
    {
      name: "bold",
      isActive: () => props?.editor?.isActive("bold") ?? false,
      command: () => props?.editor?.chain()?.focus()?.toggleBold()?.run(),
      icon: FontBoldIcon,
    },
    {
      name: "italic",
      isActive: () => props?.editor?.isActive("italic") ?? false,
      command: () => props?.editor?.chain()?.focus()?.toggleItalic()?.run(),
      icon: FontItalicIcon,
    },
    {
      name: "underline",
      isActive: () => props?.editor?.isActive("underline") ?? false,
      command: () => props?.editor?.chain()?.focus()?.toggleUnderline()?.run(),
      icon: UnderlineIcon,
    },
    {
      name: "strike",
      isActive: () => props?.editor?.isActive("strike") ?? false,
      command: () => props?.editor?.chain()?.focus()?.toggleStrike()?.run(),
      icon: StrikethroughIcon,
    },
    {
      name: "code",
      isActive: () => props?.editor?.isActive("code") ?? false,
      command: () => props?.editor?.chain()?.focus()?.toggleCode()?.run(),
      icon: CodeIcon,
    },
  ];

  const bubbleMenuProps: EditorBubbleMenuProps = {
    ...props,
    shouldShow: ({ editor }) => {
      return editor.view.state.selection.content().size > 0;
    },
    tippyOptions: {
      moveTransition: "transform 0.15s ease-out",
      onHidden: () => {
        setIsNodeSelectorOpen(false);
        setIsColorSelectorOpen(false);
        setIsLinkSelectorOpen(false);
      },
    },
  };

  const [isNodeSelectorOpen, setIsNodeSelectorOpen] = useState(false);
  const [isColorSelectorOpen, setIsColorSelectorOpen] = useState(false);
  const [isLinkSelectorOpen, setIsLinkSelectorOpen] = useState(false);
  const [isInstructionPrompterOpen, setIsInstructionPrompterOpen] = useState(false);

  return (
    <BubbleMenu
      {...bubbleMenuProps}
      className="flex w-fit divide-x divide-stone-200 rounded border border-stone-200 bg-white shadow-xl"
    >
      {props.editor && <NodeSelector
        editor={props.editor}
        isOpen={isNodeSelectorOpen}
        setIsOpen={() => {
          setIsNodeSelectorOpen(!isNodeSelectorOpen);
          setIsColorSelectorOpen(false);
          setIsLinkSelectorOpen(false);
          setIsInstructionPrompterOpen(false);
        }}
      />}
       {
        props.editor && <InstructionPrompter editor={props.editor}
        isOpen={isInstructionPrompterOpen}
        setIsOpen={() => {
          setIsInstructionPrompterOpen(!isInstructionPrompterOpen);
          setIsNodeSelectorOpen(false);
          setIsColorSelectorOpen(false);
          setIsLinkSelectorOpen(false);
        }} />
      }
       {props.editor && <LinkSelector
        editor={props.editor}
        isOpen={isLinkSelectorOpen}
        setIsOpen={() => {
          setIsLinkSelectorOpen(!isLinkSelectorOpen);
          setIsColorSelectorOpen(false);
          setIsNodeSelectorOpen(false);
          setIsInstructionPrompterOpen(false);
        }}
      />}
      <div className="flex">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.command}
            className="p-2 text-stone-600 hover:bg-stone-100 active:bg-stone-200"
            type="button"
          >
            <item.icon
              className={cn("h-4 w-4", {
                "text-blue-500": item.isActive(),
              })}
            />
          </button>
        ))}
      </div>
      {props.editor && <ColorSelector
        editor={props.editor}
        isOpen={isColorSelectorOpen}
        setIsOpen={() => {
          setIsColorSelectorOpen(!isColorSelectorOpen);
          setIsNodeSelectorOpen(false);
          setIsLinkSelectorOpen(false);
          setIsInstructionPrompterOpen(false);
        }}
      />}
    </BubbleMenu>
  );
};
