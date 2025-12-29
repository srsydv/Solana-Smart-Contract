use anchor_lang::prelude::*;

declare_id!("FrYZABVkq3TuCnSrhq437qvEBdF4Bi1grBAeLD8yZcrm");

#[program]
pub mod calci {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
