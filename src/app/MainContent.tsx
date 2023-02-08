import SearchInput from "@/components/SearchInput";
import UserCenter from "@/components/UserCenter";
import MobileIcon from "@/components/MobileIcon";
import "../style/main.scss";
type Props = {
  route: React.ReactNode;
};
export default function MainContent(props: Props) {
  return (
    <section className="main-content">
      <div className="main-content__header flex justify-between">
        <MobileIcon />
        <SearchInput />
        <UserCenter />
      </div>
      <div className="main-content__container">
        <div className="w-full p-8 bg-white max-[576px]:p-0">{props.route}</div>
      </div>
    </section>
  );
}
