import * as styles from './tagBox.css';

interface TagBoxProps {
  tagName: string;
  onRemove?: () => void;
}

export function TagBox({ tagName, onRemove }: TagBoxProps) {
  return (
    <div className={styles.tagBox}>
      {tagName}
      {onRemove && (
        <button
          type="button"
          className={styles.removeButton}
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          aria-label={`태그 삭제: ${tagName}`}
        >
          ×
        </button>
      )}
    </div>
  );
}
