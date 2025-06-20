import { Box } from "../../components/Box";
import { Button } from "../../components/Button";

type SignUpFormProps = {
  onSubmit: () => void;
};
export function SignUpForm({ onSubmit }: SignUpFormProps) {
  return (
    <Box>
      <Button title="Criar conta" onPress={onSubmit} />
    </Box>
  );
}
