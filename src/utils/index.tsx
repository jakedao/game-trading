import { Monster } from "@/components/common";
import { IMonster } from "@/models";
import { Stack } from "@mui/material";

export const renderMonster = (monster: IMonster[]) => {
  console.log("checking monster", monster);

  return (
    <Stack direction="row" columnGap={2}>
      {monster.map((m) => (
        <Monster {...m} />
      ))}
    </Stack>
  );
};
