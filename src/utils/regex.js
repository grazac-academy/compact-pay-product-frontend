export const checkMail = (mail) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail
  );
};

export const checkPassword = (link) => {
  // eslint-disable-next-line
  return /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])(?=.{8,})/.test(
    link
  );
};
