const Footer = () => (
  <div className="bg-tf-red dark:bg-tf-purple dark:text-black h-96 pt-6 px-6 transition-colors md:flex space-y-8 md:space-y-0 md:space-x-12 text-white tracking-wider text-sm">
    <div >
      <p>Camberwell College of Arts</p>
      <p>45 - 65 Peckham Road</p>
      <p>London</p>
      <p>SE5 8UF</p>
    </div>
    <div >
      <p>This website is typeset in:</p>
      <ul>
        <li><span className="font-serif"><a href="https://www.itsnicethat.com/articles/the-graduates-rachel-treliving">Gray Regular</a></span> by <a href="https://racheltreliving.com/">Rachel Treliving</a></li>
        <li><a href="https://fonts.adobe.com/fonts/neue-haas-unica">Neue Haas Unica W1G</a> by <a href="https://tosche.net/fonts">Toshi Omagari</a></li>
      </ul>
    </div>
    <div className="flex-grow" />
    <div>
      <p>For more information or to report a problem please contact <a className="underline underline-offset-2" href="mailto:j.clarke@arts.ac.uk">Jack Clarke</a>, <a className="underline underline-offset-2" href="mailto:c.abbott@arts.ac.uk">Charlie Abbott</a> or <a className="underline underline-offset-2" href="mailto:k.rehal@arts.ac.uk">Kam Rehal</a></p>
    </div>
  </div>
);

export default Footer;
