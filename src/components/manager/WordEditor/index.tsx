import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react/dist/ckeditor";
import Event from "@ckeditor/ckeditor5-utils/src/eventinfo";
import React, { useEffect, useRef, useState } from "react";

interface WordEditorProps {
  value: string;
  onChange: (data: string) => void;
}

interface useRefProps {
  current: {
    CKEditor: CKEditor;
    ClassicEditor: ClassicEditor;
  };
}

export const WordEditor = ({ value, onChange }: WordEditorProps) => {
  const editorRef = useRef() as useRefProps;
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <>
      {editorLoaded && (
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
            ],
          }}
          data={value}
          onChange={(evt: Event, editor: ClassicEditor) =>
            onChange(editor.getData())
          }
        />
      )}
    </>
  );
};
