use anchor_lang::prelude::*;

declare_id!("FrYZABVkq3TuCnSrhq437qvEBdF4Bi1grBAeLD8yZcrm");

#[program]
pub mod calci {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.calci_acc.calci_result = 0;
        ctx.accounts.calci_acc.payer = ctx.accounts.fee_payer.key();
        msg!("Greetings from calci program: {:?}", ctx.program_id);
        msg!("Payer: {:?}", ctx.accounts.fee_payer.key());
        Ok(())
    }

    pub fn add(ctx: Context<Add>,a: u8, b: u8) -> Result<()> {
        msg!("Greetings from calci program: {:?}", ctx.program_id);
        msg!("A: {:?}", a);
        msg!("B: {:?}", b);
        ctx.accounts.calci_acc.calci_result = a + b;
        msg!("Result: {:?}", ctx.accounts.calci_acc.calci_result);
        Ok(())
    }


    pub fn sub(ctx: Context<Sub>,a: u8, b: u8) -> Result<()> {
        msg!("Greetings from calci program: {:?}", ctx.program_id);
        msg!("A: {:?}", a);
        msg!("B: {:?}", b);
        ctx.accounts.calci_acc.calci_result = a - b;
        msg!("Result: {:?}", ctx.accounts.calci_acc.calci_result);
        Ok(())
    }

    pub fn div(ctx: Context<Sub>,a: u8, b: u8) -> Result<()> {
        msg!("Greetings from calci program: {:?}", ctx.program_id);
        msg!("A: {:?}", a);
        msg!("B: {:?}", b);
        require!(b != 0, ErrorCode::DivisionByZero);
        ctx.accounts.calci_acc.calci_result = a / b;
        msg!("Result: {:?}", ctx.accounts.calci_acc.calci_result);
        Ok(())
    }

}

#[account]
#[derive(InitSpace)]
pub struct CalciResult {
    pub calci_result: u8,
    pub payer: Pubkey,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Division by zero")]
    DivisionByZero,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    fee_payer: Signer<'info>,
    #[account(init, space = 8 + CalciResult::INIT_SPACE, payer = fee_payer, seeds = [b"calci_result", fee_payer.key().as_ref()], bump)]
    calci_acc: Account<'info, CalciResult>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Add<'info> {
    #[account(mut)]
    calci_acc: Account<'info, CalciResult>,
}
