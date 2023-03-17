import { title, subTile, paragraph, button } from "./elemPage.js"

const main = () => {
  paragraph("the <span>horror game</span> of the year")
  title("ENDLESS<br>NIGHTMARE")
  subTile("You need to find the way out or your night will never end!")
  button("readMore", "READ MORE", "READ MORE")
  button("playNow", "PLAY NOW", "PLAY NOW")
}

main()