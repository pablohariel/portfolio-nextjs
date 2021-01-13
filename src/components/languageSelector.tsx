import styles from '../styles/components/LanguageSelector.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IoCaretDown } from "react-icons/io5";
import { Dropdown, DropdownButton } from 'react-bootstrap'
import React, { useState} from 'react'

interface Props {
  pageTitle: string,
  pageDescription: string
}

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className={styles.dropdown}
  >
    <p className={styles.dropdown_text}> 
      {children}
    </p>
    <div className={styles.dropdown_icon}>
      <IoCaretDown size={'100%'} />
    </div>
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={styles.dropdown_menu}
        aria-labelledby={labeledBy}
      >
        <ul className={styles.dropdown_menu_item}>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const LanguageSelector: React.FC<Props> = ({ pageTitle = '', pageDescription = '' }) => {
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
              {useRouter().locale === 'en' ? 
                <Link href="/pt" locale="pt"><a className={styles.menu_item_text}>PT-BR</a></Link> 
                : 
                <Link href="/" locale="en"><a className={styles.menu_item_text}>EN-US</a></Link>
              }
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default LanguageSelector
