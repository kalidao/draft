'use client'
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { Editor } from "@tiptap/core";
import { TrashIcon } from "lucide-react";
import { CheckIcon, MagicWandIcon } from "@radix-ui/react-icons";
import { cn, getUrlFromString } from "@/lib/utils";
import { useChat, useCompletion } from "ai/react";

interface InstructionPrompterProps {
    editor: Editor;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface TextSelection {
    from: number;
    to: number;
}

export const InstructionPrompter: FC<InstructionPrompterProps> = ({
    editor,
    isOpen,
    setIsOpen,
  }) => {
    const [selection, setSelection] = useState<TextSelection | null>(null);
    const { complete }= useCompletion({
        api: '/api/completion',
    })
    const inputRef = useRef<HTMLInputElement>(null);

    // Autofocus on input by default
    useEffect(() => {
        inputRef.current && inputRef.current?.focus();
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        const instruction = inputRef.current?.value;

        if (!instruction) return;
        console.log('instruction', instruction);
        const from = editor.state.selection.from;
        const to = editor.state.selection.to;

        setSelection({
          from,
          to
        });

        const content = editor.state.doc.textBetween(from, to);

        let res = await complete(
            instruction,
           {
            body: {
                content: content,
            }
           }
        )

        if (!res) return;
    
        if (res.startsWith('"') && res.endsWith('"')) {
            res = res.slice(1, -1);
        }



        editor.chain().focus().insertContentAt({
            from: from,
            to: to
        }, res).run();

        setIsOpen(false);
    }

    return <div className="relative">
    <button
      type="button"
      className="flex h-full items-center space-x-2 px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 active:bg-stone-200"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
     <MagicWandIcon />
    </button>
    {isOpen && (
      <form
        onSubmit={handleSubmit}
        className="fixed top-full z-[99999] mt-1 flex w-60 overflow-hidden rounded border border-stone-200 bg-white p-1 shadow-xl animate-in fade-in slide-in-from-top-1"
      >
        <input
          ref={inputRef}
          type="text"
          id="instruction-prompter"
          placeholder="Give edit instructions."
          className="flex-1 bg-white p-1 text-sm outline-none"
          defaultValue={""}
        />
        
      </form>
    )}
  </div>
  }