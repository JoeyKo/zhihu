import React from "react";
import classNames from "classnames";
import Input from "components/Input";
import Button from "components/Button";
import styles from "./Search.module.scss";

function Search({
  onFocus,
  onBlur,
  className,
  focus,
  onSearch,
  onChange,
  placeholder
}) {
  return (
    <div
      className={classNames(className, {
        [styles.inputWrapper]: true,
        [styles.searchBarInput]: true,
        [styles.inputWrapperGrey]: true,
        [styles.isFocus]: focus,
        [styles.focusedInput]: focus
      })}
    >
      <Input
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className={styles.inputAfter}>
        <Button type="primary" className={styles.searchIcon} onClick={onSearch}>
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            &#8203;
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Search;
