import React from "react";
import { utilities } from "../../utilities";
import { components } from "..";
import { Data } from "../../data";
import { Link } from "react-router-dom";
import { Sublink } from "../../data/Footer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { GithubIcon, DiscordIcon, LinkedInIcon, TwitterIcon } from "../icons";

const { Component } = utilities;
const { Logo } = components;

const Footer: React.FC = () => {
  const links = Data.FooterLinks.map((link, indx) => (
    <div key={link.mainTitle + indx} className="w-24">
      <p className="whitespace-nowrap font-semibold text-skin-base ">
        {link.mainTitle}
      </p>
      <Sublinks links={link.subLinks} />
    </div>
  ));

  const socials = (
    <div className="flex flex-col items-center gap-y-2 text-skin-base">
      <p className="mb-2 border-b border-skin-base font-ubuntu-mono text-xl font-medium capitalize">
        Follow us on
      </p>
      <div className="flex items-center gap-6 text-skin-muted">
        {[LinkedInIcon, GithubIcon, TwitterIcon, DiscordIcon].map(
          (Icons, indx) => (
            <Icons key={indx} className="h-6 w-6" />
          )
        )}
      </div>
    </div>
  );
  return (
    <Component
      className="relative min-h-64"
      glowId={`FooterGlowBottom`}
      glowClass="max-w-2xl -left-8"
    >
      {/* Grid Laout for Links */}
      <div className="relative mx-auto grid grid-cols-2 place-items-center gap-y-12 p-4 pb-8 md:grid-cols-3 lg:grid-cols-4">
        {links}
      </div>
      {/* Social links copyright etc */}
      <div className="grid place-items-center p-4">
        {socials}
        <div className="my-8 flex items-center gap-x-2">
          <Logo />
          <div className="h-2 w-2 rounded-full bg-skin-inverted/50"></div>
          <p className="capitalize text-skin-muted">© 2022 libu</p>
        </div>
      </div>
    </Component>
  );
};

export default Footer;

const Sublinks: React.FC<{ links: Array<Sublink> }> = ({ links }) => {
  return (
    <div className="mt-2 flex flex-col gap-y-2 font-medium text-skin-muted/70 ">
      {links.map((link, indx) => {
        return !link.external ? (
          <Link
            key={link.title + indx}
            to={link.to}
            className="transition duration-200 ease-in-out hover:text-skin-accent-hover"
          >
            {link.title}
          </Link>
        ) : (
          <a
            key={link.title + indx}
            href={link.to}
            className="flex items-center gap-x-2 transition duration-200 ease-in-out hover:text-skin-accent-hover"
          >
            {link.title} <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
};
