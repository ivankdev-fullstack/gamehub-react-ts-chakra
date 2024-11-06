import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded
    ? children
    : children.substring(0, limit).trim() + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
        marginLeft={2}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};
