import Link from 'next/link'
import Date from './date'
import utilStyles from '../styles/utils.module.css'

export default function PostListItem({ id, date, title }) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  )
}