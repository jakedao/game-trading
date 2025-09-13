import { IMonster } from "@/models";
import { Stack } from "@mui/material";
import { nanoid } from "nanoid";

const Monster = (monster: IMonster) => {
  return (
    <Stack
      key={nanoid()}
      direction="row"
      alignItems="center"
      sx={{
        "& img": {
          marginRight: "5px",
        },
      }}
    >
      <img
        src={`images/${monster.attribute.toLowerCase()}`}
        alt={monster.name}
        width={20}
        height={20}
      />
      {monster.name}
    </Stack>
  );
};

export default Monster;
