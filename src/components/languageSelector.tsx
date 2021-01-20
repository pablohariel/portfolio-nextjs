import React, { useState } from 'react'
import styles from '../styles/components/LanguageSelector.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IoCaretDown } from 'react-icons/io5'
import { Dropdown } from 'react-bootstrap'

interface Props {
  pageTitle: string,
  pageDescription: string
}

const CustomToggle = React.forwardRef((props: any, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  return <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      props.onClick(e)
    }}
    className={styles.dropdown}
  >
    <p className={styles.dropdown_text}>
      {props.children}
    </p>
    <div className={styles.dropdown_icon}>
      <IoCaretDown size={'100%'} />
    </div>
  </a>
})

const CustomMenu = React.forwardRef(
  (props: any, ref: any) => {
    const [value, setValue] = useState('')

    return (
      <div
        ref={ref}
        style={props.style}
        className={styles.dropdown_menu}
      >
        <ul className={styles.dropdown_menu_item}>
          {React.Children.toArray(props.children).filter(
            (child) =>
              !value || child
          )}
        </ul>
      </div>
    )
  }
)

const LanguageSelector: React.FC<Props> = ({ pageTitle = '', pageDescription = '' }) => {
  console.log(useRouter().pathname)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {useRouter().locale === 'en' ? 'EN-US' : 'PT-BR'}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>

          <Dropdown.Item>
              {useRouter().locale === 'en'
                ? <Link href={`pt${useRouter().pathname}`} locale="pt"><a className={styles.menu_item_text}>PT-BR</a></Link>
                : <Link href={`${useRouter().pathname}`} locale="en"><a className={styles.menu_item_text}>EN-US</a></Link>
              }
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default LanguageSelector
