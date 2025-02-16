import { ImageElement } from "./Imageupload";
import { AttachmentElement } from "./Fileupload";
import { Editor, Transforms, Element as SlateElement } from "slate";
import { useSlate } from "slate-react";
import { Icon } from "@iconify/react";
import CustomTooltip from "../../../components/Tooltip";
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const LIST_TYPES = ["numbered-list", "bulleted-list"];
export const BlockButton = ({ format, icon, tooltipText }) => {
  const editor = useSlate();
  return (
    <CustomTooltip tooltipText={tooltipText}>
      <button
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      className="border-none transparent-bg fs-5"
    >
      <Icon icon={icon}></Icon>
    </button>
    </CustomTooltip>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );
  return !!match;
};

export const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );
    case "image":
      return (
        <ImageElement
          attributes={attributes}
          element={element}
          children={children}
        />
      );
    case "attachment":
      return (
         <AttachmentElement 
         attributes={attributes}
         element={element}
         children={children}
         />
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
