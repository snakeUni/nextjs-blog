import { memo, useState } from 'react'
import cn from 'classnames'
import Link from '@/components/link'
import styles from './text.module.css'

const ReactIcon = (
  <svg
    t="1605350562720"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3021"
    width="16"
    height="16"
    fill="#61dafb"
  >
    <path
      d="M836.4 354.4c-10.8-3.6-21.6-7-32.4-10.2 1.8-7.4 3.4-14.8 5-22.2 24.6-119.2 8.4-215-46.2-246.6-52.6-30.2-138.4 1.2-225.2 76.8-8.6 7.4-17 15.2-25 23-5.4-5.2-11-10.4-16.6-15.4-91-80.8-182.2-114.8-236.8-83-52.4 30.4-68 120.6-46 233.4 2.2 11.2 4.6 22.2 7.4 33.4-12.8 3.6-25.4 7.6-37.2 11.8C76.6 392.4 0 450.8 0 511.2c0 62.4 81.6 125 192.6 163 9 3 18 6 27.2 8.6-3 12-5.6 23.8-8 36-21 111-4.6 199 47.8 229.2 54 31.2 144.8-0.8 233.2-78.2 7-6.2 14-12.6 21-19.4 8.8 8.6 18 16.8 27.2 24.8 85.6 73.6 170.2 103.4 222.4 73.2 54-31.2 71.6-125.8 48.8-241-1.8-8.8-3.8-17.8-6-27 6.4-1.8 12.6-3.8 18.8-5.8 115.4-38.2 199-100 199-163.4 0-60.6-78.8-119.4-187.6-156.8zM565.8 184.6c74.4-64.8 143.8-90.2 175.4-72 33.8 19.4 46.8 97.8 25.6 200.8-1.4 6.8-2.8 13.4-4.6 20-44.4-10-89.4-17.2-134.6-21.2-26-37.2-54.4-72.8-85.2-106.2 7.8-7.4 15.4-14.4 23.4-21.4zM334.4 615c10.2 17.4 20.6 34.8 31.6 51.8-31.2-3.4-62.2-8.4-92.8-15 8.8-28.8 19.8-58.6 32.6-89 9.2 17.6 18.6 35 28.6 52.2z m-60.6-240.6c28.8-6.4 59.4-11.6 91.2-15.6-10.6 16.6-21 33.6-30.8 50.8-9.8 17-19.4 34.4-28.4 52-12.6-29.8-23.2-59-32-87.2z m54.8 137.8c13.2-27.6 27.6-54.6 42.8-81.2s31.6-52.4 48.8-77.8c30-2.2 60.6-3.4 91.8-3.4s62 1.2 91.8 3.4c17 25.2 33.2 51 48.6 77.4s29.8 53.4 43.4 80.8c-13.4 27.6-27.8 54.8-43.2 81.6-15.2 26.6-31.4 52.4-48.4 78-29.8 2.2-60.8 3.2-92.2 3.2s-61.8-1-91.2-2.8c-17.4-25.4-33.8-51.4-49.2-78s-29.6-53.6-43-81.2z m361.2 102.4c10.2-17.6 19.8-35.4 29.2-53.4 12.8 29 24 58.4 33.8 88.6-31 7-62.4 12.4-94 16 10.8-16.8 21-34 31-51.2z m28.8-153c-9.4-17.6-19-35.2-29-52.4-9.8-17-20-33.8-30.6-50.4 32.2 4 63 9.4 91.8 16-9.2 29.6-20 58.4-32.2 86.8zM512.4 236.6c21 22.8 40.8 46.8 59.2 71.6-39.6-1.8-79.4-1.8-119 0 19.6-25.8 39.8-49.8 59.8-71.6zM280.4 114c33.6-19.6 108.2 8.4 186.8 78 5 4.4 10 9.2 15.2 14-31 33.4-59.6 69-85.8 106.2-45.2 4-90 11-134.4 20.8-2.6-10.2-4.8-20.6-7-31-18.8-96.8-6.4-169.8 25.2-188z m-49 527.2c-8.4-2.4-16.6-5-24.8-7.8-42.6-13.4-91-34.6-126-62.4-20.2-14-33.8-35.6-37.6-59.8 0-36.6 63.2-83.4 154.4-115.2 11.4-4 23-7.6 34.6-11 13.6 43.4 30 86 49 127.2-19.2 41.8-35.8 85-49.6 129z m233.2 196c-33 30.2-71.2 54.2-112.8 70.6-22.2 10.6-47.8 11.6-70.6 2.6-31.8-18.4-45-89-27-184 2.2-11.2 4.6-22.4 7.4-33.4 44.8 9.6 90 16.2 135.8 19.6 26.4 37.4 55.4 73.2 86.4 106.8-6.4 6.2-12.8 12.2-19.2 17.8z m49-48.6c-20.4-22-40.8-46.4-60.6-72.6 19.2 0.8 39 1.2 59 1.2 20.6 0 40.8-0.4 60.8-1.4-18.4 25.4-38.2 49.6-59.2 72.8z m261.4 60c-1.8 24.4-13.8 47.2-33 62.6-31.8 18.4-99.6-5.6-172.8-68.4-8.4-7.2-16.8-15-25.4-23 30.6-33.8 58.8-69.6 84.4-107.2 45.8-3.8 91.4-10.8 136.4-21 2 8.2 3.8 16.4 5.4 24.4 9.8 43.2 11.4 88.2 5 132.6z m36.4-215c-5.6 1.8-11.2 3.6-17 5.2-14-43.6-31.2-86.2-51-127.6 19.2-40.8 35.4-82.8 49-125.8 10.4 3 20.4 6.2 30 9.4 93.2 32 158.6 79.6 158.6 116 0 39.2-69.8 89.8-169.6 122.8z m-299.4-30c50.6 0 91.6-41 91.6-91.6s-41-91.6-91.6-91.6c-50.6 0-91.6 41-91.6 91.6s41 91.6 91.6 91.6z"
      p-id="3022"
    ></path>
  </svg>
)

const categories = {
  'computer science': '🎓',
  language: '🔭',
  tools: '🍭',
  sketch: '💎',
  react: ReactIcon,
}

const request = ['🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿']

const TextEntry = ({ title, type, comment, href, category, as }) => {
  const [diceRoll] = useState(Math.random())
  const emoji = category
    ? categories[category]
    : request[Math.round(diceRoll * (request.length - 1))]
  return (
    <li className={cn(styles.item, !category && styles.request)}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title}`}
        className={styles.link}
      >
        {emoji && (
          <span
            role="img"
            aria-label={category}
            title={category}
            className={styles.category}
          >
            {emoji}
          </span>
        )}
        <span className={cn(styles.title, 'clamp', !category && styles.new)}>
          {title}
        </span>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
