import { db } from "@/lib/db";
import {
  Button,
  Container,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { deleteUser, updateUser } from "./action";
import { userKey } from "./helper";
import { DeleteButtonWithForm } from "@/components/DeleteButtonWithForm";
import { EditableName } from "./components/EditableName";

const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  return `${y}-${m}-${d}`;
};

export default async function Home() {
  const users = await db.user.findMany();

  return (
    <Container>
      <Table>
        <TableThead>
          <TableTr>
            <TableTh>{userKey("id")}</TableTh>
            <TableTh>{userKey("name")}</TableTh>
            <TableTh>{userKey("createdAt")}</TableTh>
            <TableTh>{userKey("updatedAt")}</TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {users.map((user) => (
            <TableTr key={user.id}>
              <TableTd>{user.id}</TableTd>
              <TableTd>
                <EditableName
                  id={user.id}
                  defaultValue={user.name}
                  action={updateUser}
                />
              </TableTd>
              <TableTd>{formatDate(user.createdAt)}</TableTd>
              <TableTd>{formatDate(user.updatedAt)}</TableTd>
              <TableTd>
                <DeleteButtonWithForm
                  name={"id"}
                  value={user.id}
                  action={deleteUser}
                />
              </TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </Container>
  );
}
