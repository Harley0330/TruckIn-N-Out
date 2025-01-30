import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    items: [
      {
        icon: "/homee.png",
        label: "Dashboard",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/deliveries.png",
        label: "View Deliveries",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/payroll.png",
        label: "Manage Payroll",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    items: [
      {
        icon: "/accounts.png",
        label: "Accounts",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/settings.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logoutt.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i, index) => (
        <div className="flex flex-col gap-2" key={index}>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-white py-2"
            >
              <Image src={item.icon} alt="" width={30} height={30} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
