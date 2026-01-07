use anchor_lang::prelude::*;

declare_id!("4pCTeU6ZZmPkzkPGLoW6RGAqQo2yw9zguptDRprfFQA4");

#[program]
pub mod favorites {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
