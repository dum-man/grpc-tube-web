import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
import editorStyles from "./MentionEditor.module.css";
import mentions from "./mentions";
import "@draft-js-plugins/mention/lib/plugin.css";
import MentionsPopover from "./MentionsPopover";

const GROUP_MEMBER_LIST_ITEM_HEIGHT = 44;
const GROUP_MEMBERS_LIST_HEIGHT = 216;
const GROUP_MEMBERS_LIST_WIDTH = 360;

const MentionEditor = (): ReactElement => {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    const { MentionSuggestions } = mentionPlugin;
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  const defineGroupMembersListHeight = () => {
    if (false) {
      let height = suggestions.length * GROUP_MEMBER_LIST_ITEM_HEIGHT;
      if (height > window.innerHeight / 2) {
        height = window.innerHeight / 2;
      }
      return height;
    } else if (suggestions.length <= 5) {
      return suggestions.length * GROUP_MEMBER_LIST_ITEM_HEIGHT;
    } else {
      return GROUP_MEMBERS_LIST_HEIGHT;
    }
  };

  const defineGroupMembersWidth = () => {
    if (false) {
      return window.innerWidth;
    } else {
      return GROUP_MEMBERS_LIST_WIDTH;
    }
  };

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current!.focus();
      }}
      style={{ position: "relative" }}
    >
      <Editor
        editorKey={"editor"}
        editorState={editorState}
        onChange={setEditorState}
        plugins={plugins}
        ref={ref}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={(mention) => {
          console.log(mention);
          // get the mention object selected
        }}
        entryComponent={({ mention: { name, avatar } }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "0 5px",
              borderBottom: "1px solid black",
            }}
          >
            <img
              style={{ borderRadius: "50%" }}
              width={20}
              height={20}
              src={avatar}
              alt={name}
            />
            <p>{name}</p>
          </div>
        )}
        popoverContainer={({ children }) => (
          <MentionsPopover
            height={defineGroupMembersListHeight()}
            width={defineGroupMembersWidth()}
          >
            {children}
          </MentionsPopover>
        )}
      />
    </div>
  );
};

export default MentionEditor;
