function Footer(props) {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p>
        &copy; {currentYear} {props.ftitle}
      </p>
    </footer>
  );
}

export default Footer;
