import Button from "@/components/ui/button";
import { stylex } from "@stylexjs/stylex";

export default function Home() {
  return (
    <div>
      <Button variant="primary" style={styles.button}>
        hoge
      </Button>
    </div>
  );
}

const styles = stylex.create({
  button: {
    marginTop: 4,
  },
});
