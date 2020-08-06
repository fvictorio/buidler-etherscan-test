async function main() {
  const Bar = await ethers.getContractFactory("Bar");
  const bar = await Bar.deploy(11);

  await bar.deployed();

  console.log("Bar deployed to:", bar.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
