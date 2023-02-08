import SearchInput from "@/components/SearchInput";
import UserCenter from "@/components/UserCenter";
import MobileIcon from "@/components/MobileIcon";
import "../style/main.scss";
type Props = {
  comp: React.ReactNode
}
export default function MainContent(props : Props) {
  return (
    <section className="main-content">
      <div className="main-content__header flex justify-between">
        <MobileIcon />
        <SearchInput />
        <UserCenter />
      </div>
      {props.comp}
    </section>
  );
}
