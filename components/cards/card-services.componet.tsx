import { Card } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"

interface cardProps {
    image:string;
    cardTitle:string,
    cardText:string
}
export default function Demo({image,cardTitle,cardText}: cardProps) {
  return (
    <Card.Root width="400px" height="500px">
      <Card.Body gap="2" height="500px" padding="0px">
        <Avatar
          src={image}
          shape="square"
          name="Nue Camp"
        />
        <Card.Title mt="2" className="font-black text-2xl mt-4">{cardTitle}</Card.Title>
        <Card.Description className="opacity-60 font-medium text-xl mt-4 text-justify">
            {cardText}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}