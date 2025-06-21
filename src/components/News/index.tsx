import Button from "../Button"

type Props = {}

const News = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <h4>NFT Drops Calendar</h4>
        <div className="ml-auto">
          <Button />
          <Button />
        </div>
      </div>
      <div className="flex">
        <h4>Hot nft</h4>
        <img src="" alt="hot nft" />
      </div>
      <div className="flex">
        <h4>promotion</h4>
        <img src="" alt="promotion" />
      </div>
    </div>
  )
}

export default News