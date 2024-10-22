import styles from "./CommentItem.module.scss"
 export const CommentItem = ({ date, description }) =>{
    return(
   <div className={styles.article_cometario}>
        <time>{date}</time>
        <p>{description}</p>
    </div>
);
} 